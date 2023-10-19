import { TopNavigation } from "@/components/TopNavigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex-col flex w-full">
      <TopNavigation />
      <div className="flex flex-1 flex-col bg-dark relative overflow-auto">
        <div className="absolute left-0 top-0 right-0 p-2">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>ส่ง IG ขึ้นจอ</CardTitle>
                  <CardDescription>xxxx</CardDescription>
                </CardHeader>
                <CardContent className="content-center">
                  xxx
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>ส่ง IG ขึ้นจอ</CardHeader>
                <CardContent>

                </CardContent>
              </Card>
            </div>
            <div>
              <Card>

              </Card>
            </div>
            <div>
              <Card>

              </Card>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
