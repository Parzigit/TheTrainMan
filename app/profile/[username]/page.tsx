import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, MapPin, Calendar, Star } from 'lucide-react'

export default function ProfilePage({ params }: { params: { username: string } }) {
  const user = {
    name: "Jane Doe",
    username: params.username,
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Avid traveler | Photography enthusiast | Food lover",
    stats: {
      travels: 42,
      countries: 15,
      followers: 1200,
      following: 350
    }
  }

  const recentTravels = [
    { id: 1, title: "Santorini Sunset", location: "Santorini, Greece", date: "August 2023", rating: 5 },
    { id: 2, title: "New York City Lights", location: "New York, USA", date: "July 2023", rating: 4 },
    { id: 3, title: "Machu Picchu Trek", location: "Cusco, Peru", date: "June 2023", rating: 5 },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback><User className="w-10 h-10" /></AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-muted-foreground">@{user.username}</p>
          <p className="mt-2">{user.bio}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex space-x-4">
          <div>
            <div className="text-2xl font-bold">{user.stats.travels}</div>
            <div className="text-sm text-muted-foreground">Travels</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{user.stats.countries}</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{user.stats.followers}</div>
            <div className="text-sm text-muted-foreground">Followers</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{user.stats.following}</div>
            <div className="text-sm text-muted-foreground">Following</div>
          </div>
        </div>
        <Button>Follow</Button>
      </div>

      <Tabs defaultValue="travels">
        <TabsList>
          <TabsTrigger value="travels">Travels</TabsTrigger>
          <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="travels" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentTravels.map((travel) => (
              <Card key={travel.id}>
                <CardHeader>
                  <CardTitle>{travel.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {travel.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {travel.date}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{travel.rating}/5</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="wishlist">
          {/* Implement wishlist content */}
        </TabsContent>
        <TabsContent value="reviews">
          {/* Implement reviews content */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

