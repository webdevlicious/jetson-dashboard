-- CreateEnum
CREATE TYPE "ResourceType" AS ENUM (
  'ATHLETE_PROFILE',
  'ACADEMIC_RECORDS',
  'ATHLETIC_STATS',
  'RECRUITMENT_STATUS',
  'COLLEGE_PROGRAMS',
  'MESSAGES',
  'USER_RELATIONSHIPS',
  'SYSTEM_SETTINGS'
);

-- AlterTable
ALTER TABLE "permission_sets"
ALTER COLUMN "resource" TYPE "ResourceType" USING ("resource"::"ResourceType");

-- Insert default permissions for OWNER role
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
WHERE u.role = 'OWNER';

-- Insert default permissions for DEVELOPER role
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
WHERE u.role = 'DEVELOPER';

-- Insert default permissions for ATHLETE role
INSERT INTO "permission_sets" ("id", "userId", "resource", "access", "created_at", "updated_at")
SELECT 
  gen_random_uuid(),
  u.id,
  r.resource,
  CASE r.resource
    WHEN 'ATHLETE_PROFILE' THEN 'WRITE'::"PermissionLevel"
    WHEN 'ACADEMIC_RECORDS' THEN 'WRITE'::"PermissionLevel"
    WHEN 'ATHLETIC_STATS' THEN 'WRITE'::"PermissionLevel"
    WHEN 'RECRUITMENT_STATUS' THEN 'READ'::"PermissionLevel"
    WHEN 'MESSAGES' THEN 'WRITE'::"PermissionLevel"
    ELSE 'NONE'::"PermissionLevel"
  END,
  NOW(),
  NOW()
FROM "users" u
CROSS JOIN (SELECT unnest(enum_range(NULL::"ResourceType")) AS resource) r
WHERE u.role = 'ATHLETE';

-- Insert default permissions for COLLEGE_SCOUT role
INSERT INTO "permission_sets" ("id", "userId", "resource", "access", "created_at", "updated_at")
SELECT 
  gen_random_uuid(),
  u.id,
  r.resource,
  CASE r.resource
    WHEN 'ATHLETE_PROFILE' THEN 'READ'::"PermissionLevel"
    WHEN 'ACADEMIC_RECORDS' THEN 'READ'::"PermissionLevel"
    WHEN 'ATHLETIC_STATS' THEN 'READ'::"PermissionLevel"
    WHEN 'RECRUITMENT_STATUS' THEN 'WRITE'::"PermissionLevel"
    WHEN 'COLLEGE_PROGRAMS' THEN 'WRITE'::"PermissionLevel"
    WHEN 'MESSAGES' THEN 'WRITE'::"PermissionLevel"
    ELSE 'NONE'::"PermissionLevel"
  END,
  NOW(),
  NOW()
FROM "users" u
CROSS JOIN (SELECT unnest(enum_range(NULL::"ResourceType")) AS resource) r
WHERE u.role = 'COLLEGE_SCOUT';

-- Insert default permissions for HIGH_SCHOOL_COACH role
INSERT INTO "permission_sets" ("id", "userId", "resource", "access", "created_at", "updated_at")
SELECT 
  gen_random_uuid(),
  u.id,
  r.resource,
  CASE r.resource
    WHEN 'ATHLETE_PROFILE' THEN 'READ'::"PermissionLevel"
    WHEN 'ATHLETIC_STATS' THEN 'WRITE'::"PermissionLevel"
    WHEN 'MESSAGES' THEN 'WRITE'::"PermissionLevel"
    ELSE 'NONE'::"PermissionLevel"
  END,
  NOW(),
  NOW()
FROM "users" u
CROSS JOIN (SELECT unnest(enum_range(NULL::"ResourceType")) AS resource) r
WHERE u.role = 'HIGH_SCHOOL_COACH';

-- Insert default permissions for TRAINER role
INSERT INTO "permission_sets" ("id", "userId", "resource", "access", "created_at", "updated_at")
SELECT 
  gen_random_uuid(),
  u.id,
  r.resource,
  CASE r.resource
    WHEN 'ATHLETE_PROFILE' THEN 'READ'::"PermissionLevel"
    WHEN 'ATHLETIC_STATS' THEN 'WRITE'::"PermissionLevel"
    WHEN 'MESSAGES' THEN 'WRITE'::"PermissionLevel"
    ELSE 'NONE'::"PermissionLevel"
  END,
  NOW(),
  NOW()
FROM "users" u
CROSS JOIN (SELECT unnest(enum_range(NULL::"ResourceType")) AS resource) r
WHERE u.role = 'TRAINER';