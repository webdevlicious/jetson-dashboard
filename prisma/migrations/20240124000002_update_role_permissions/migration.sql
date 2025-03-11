-- Update existing permission sets to align with new roles
UPDATE "permission_sets"
SET "access" = 'NONE'::"PermissionLevel"
WHERE "access" NOT IN ('NONE', 'READ', 'WRITE', 'MANAGE', 'FULL');

-- Insert default permissions for SUPER_ADMIN role
INSERT INTO "permission_sets" ("id", "userId", "resource", "access", "created_at", "updated_at")
SELECT 
  gen_random_uuid(), 
  u.id, 
  r.resource, 
  'FULL'::"PermissionLevel",
  NOW(),
  NOW()
FROM "users" u
CROSS JOIN (SELECT unnest(enum_range(NULL::"ResourceType")) AS resource) r
WHERE u.role = 'SUPER_ADMIN';

-- Insert default permissions for ADMIN role
INSERT INTO "permission_sets" ("id", "userId", "resource", "access", "created_at", "updated_at")
SELECT 
  gen_random_uuid(),
  u.id,
  r.resource,
  CASE r.resource
    WHEN 'SYSTEM_ARCHITECTURE' THEN 'READ'::"PermissionLevel"
    WHEN 'FINANCIAL_DATA' THEN 'READ'::"PermissionLevel"
    ELSE 'MANAGE'::"PermissionLevel"
  END,
  NOW(),
  NOW()
FROM "users" u
CROSS JOIN (SELECT unnest(enum_range(NULL::"ResourceType")) AS resource) r
WHERE u.role = 'ADMIN';

-- Insert default permissions for STANDARD_USER role
INSERT INTO "permission_sets" ("id", "userId", "resource", "access", "created_at", "updated_at")
SELECT 
  gen_random_uuid(),
  u.id,
  r.resource,
  CASE r.resource
    WHEN 'ATHLETE_PROFILE' THEN 'WRITE'::"PermissionLevel"
    WHEN 'ACADEMIC_RECORDS' THEN 'WRITE'::"PermissionLevel"
    WHEN 'ATHLETIC_STATS' THEN 'WRITE'::"PermissionLevel"
    WHEN 'MESSAGES' THEN 'WRITE'::"PermissionLevel"
    WHEN 'USER_RELATIONSHIPS' THEN 'WRITE'::"PermissionLevel"
    ELSE 'NONE'::"PermissionLevel"
  END,
  NOW(),
  NOW()
FROM "users" u
CROSS JOIN (SELECT unnest(enum_range(NULL::"ResourceType")) AS resource) r
WHERE u.role = 'STANDARD_USER';

-- Insert default permissions for PARTNER_USER role
INSERT INTO "permission_sets" ("id", "userId", "resource", "access", "created_at", "updated_at")
SELECT 
  gen_random_uuid(),
  u.id,
  r.resource,
  CASE r.resource
    WHEN 'ATHLETE_PROFILE' THEN 'READ'::"PermissionLevel"
    WHEN 'ATHLETIC_STATS' THEN 'WRITE'::"PermissionLevel"
    WHEN 'ACADEMIC_RECORDS' THEN 'READ'::"PermissionLevel"
    WHEN 'MESSAGES' THEN 'WRITE'::"PermissionLevel"
    WHEN 'USER_RELATIONSHIPS' THEN 'WRITE'::"PermissionLevel"
    WHEN 'ANALYTICS' THEN 'READ'::"PermissionLevel"
    ELSE 'NONE'::"PermissionLevel"
  END,
  NOW(),
  NOW()
FROM "users" u
CROSS JOIN (SELECT unnest(enum_range(NULL::"ResourceType")) AS resource) r
WHERE u.role = 'PARTNER_USER';

-- Insert default permissions for EXTERNAL_USER role
INSERT INTO "permission_sets" ("id", "userId", "resource", "access", "created_at", "updated_at")
SELECT 
  gen_random_uuid(),
  u.id,
  r.resource,
  CASE r.resource
    WHEN 'ATHLETE_PROFILE' THEN 'READ'::"PermissionLevel"
    WHEN 'ATHLETIC_STATS' THEN 'READ'::"PermissionLevel"
    WHEN 'RECRUITMENT_STATUS' THEN 'WRITE'::"PermissionLevel"
    WHEN 'MESSAGES' THEN 'WRITE'::"PermissionLevel"
    ELSE 'NONE'::"PermissionLevel"
  END,
  NOW(),
  NOW()
FROM "users" u
CROSS JOIN (SELECT unnest(enum_range(NULL::"ResourceType")) AS resource) r
WHERE u.role = 'EXTERNAL_USER';

-- Insert default permissions for READ_ONLY role
INSERT INTO "permission_sets" ("id", "userId", "resource", "access", "created_at", "updated_at")
SELECT 
  gen_random_uuid(),
  u.id,
  r.resource,
  CASE r.resource
    WHEN 'ANALYTICS' THEN 'READ'::"PermissionLevel"
    WHEN 'ATHLETE_PROFILE' THEN 'READ'::"PermissionLevel"
    WHEN 'ATHLETIC_STATS' THEN 'READ'::"PermissionLevel"
    ELSE 'NONE'::"PermissionLevel"
  END,
  NOW(),
  NOW()
FROM "users" u
CROSS JOIN (SELECT unnest(enum_range(NULL::"ResourceType")) AS resource) r
WHERE u.role = 'READ_ONLY';