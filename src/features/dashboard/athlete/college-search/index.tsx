import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function CollegeSearch() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">College Search</h2>
      <p className="text-muted-foreground mb-6">
        Find colleges that match your athletic and academic profile
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Search Colleges</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="search"
              placeholder="Search by college name..."
              className="mb-2"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Division</CardTitle>
          </CardHeader>
          <CardContent>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select division" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="d1">Division I</SelectItem>
                <SelectItem value="d2">Division II</SelectItem>
                <SelectItem value="d3">Division III</SelectItem>
                <SelectItem value="naia">NAIA</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Location</CardTitle>
          </CardHeader>
          <CardContent>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="northeast">Northeast</SelectItem>
                <SelectItem value="southeast">Southeast</SelectItem>
                <SelectItem value="midwest">Midwest</SelectItem>
                <SelectItem value="southwest">Southwest</SelectItem>
                <SelectItem value="west">West</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sport</CardTitle>
          </CardHeader>
          <CardContent>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select sport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mens-basketball">Men's Basketball</SelectItem>
                <SelectItem value="womens-basketball">Women's Basketball</SelectItem>
                <SelectItem value="mens-baseball">Baseball</SelectItem>
                <SelectItem value="womens-softball">Softball</SelectItem>
                <SelectItem value="mens-football">Football</SelectItem>
                <SelectItem value="mens-soccer">Men's Soccer</SelectItem>
                <SelectItem value="womens-soccer">Women's Soccer</SelectItem>
                <SelectItem value="mens-track">Men's Track & Field</SelectItem>
                <SelectItem value="womens-track">Women's Track & Field</SelectItem>
                <SelectItem value="mens-swimming">Men's Swimming & Diving</SelectItem>
                <SelectItem value="womens-swimming">Women's Swimming & Diving</SelectItem>
                <SelectItem value="mens-tennis">Men's Tennis</SelectItem>
                <SelectItem value="womens-tennis">Women's Tennis</SelectItem>
                <SelectItem value="mens-golf">Men's Golf</SelectItem>
                <SelectItem value="womens-golf">Women's Golf</SelectItem>
                <SelectItem value="mens-lacrosse">Men's Lacrosse</SelectItem>
                <SelectItem value="womens-lacrosse">Women's Lacrosse</SelectItem>
                <SelectItem value="mens-wrestling">Wrestling</SelectItem>
                <SelectItem value="mens-volleyball">Men's Volleyball</SelectItem>
                <SelectItem value="womens-volleyball">Women's Volleyball</SelectItem>
                <SelectItem value="mens-xc">Men's Cross Country</SelectItem>
                <SelectItem value="womens-xc">Women's Cross Country</SelectItem>
                <SelectItem value="womens-field-hockey">Field Hockey</SelectItem>
                <SelectItem value="mens-gymnastics">Men's Gymnastics</SelectItem>
                <SelectItem value="womens-gymnastics">Women's Gymnastics</SelectItem>
                <SelectItem value="womens-rowing">Women's Rowing</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Reset Filters</Button>
        <Button>Search Colleges</Button>
      </div>

      {/* Results section - to be implemented */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Search Results</h3>
        <p className="text-muted-foreground">Enter search criteria to find matching colleges</p>
      </div>
    </div>
  )
}