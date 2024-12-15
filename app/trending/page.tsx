import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, User } from 'lucide-react'

export default function TrendingPage() {
  const trendingTravels = [
    { id: 1, title: "Trans-Siberian Adventure", location: "Moscow to Vladivostok", image: "/placeholder.svg?height=200&width=300", rating: 4.9, reviews: 180, user: { name: "Alex", avatar: "https://i.pravatar.cc/150?img=1" } },
    { id: 2, title: "Orient Express Luxury", location: "Paris to Istanbul", image: "/placeholder.svg?height=200&width=300", rating: 4.8, reviews: 150, user: { name: "Sam", avatar: "https://i.pravatar.cc/150?img=2" } },
    { id: 3, title: "Rocky Mountaineer Scenic Route", location: "Vancouver to Banff", image: "/placeholder.svg?height=200&width=300", rating: 4.7, reviews: 130, user: { name: "Emma", avatar: "https://i.pravatar.cc/150?img=3" } },
    { id: 4, title: "Glacier Express Panoramic Journey", location: "St. Moritz to Zermatt", image: "/placeholder.svg?height=200&width=300", rating: 4.6, reviews: 110, user: { name: "Olivia", avatar: "https://i.pravatar.cc/150?img=4" } },
    { id: 5, title: "Darjeeling Himalayan Railway", location: "New Jalpaiguri to Darjeeling", image: "/placeholder.svg?height=200&width=300", rating: 4.5, reviews: 95, user: { name: "Liam", avatar: "https://i.pravatar.cc/150?img=5" } },
    { id: 6, title: "Bernina Express Alpine Crossing", location: "Chur to Tirano", image: "/placeholder.svg?height=200&width=300", rating: 4.7, reviews: 120, user: { name: "Sophia", avatar: "https://i.pravatar.cc/150?img=6" } },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Trending Travels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingTravels.map((travel) => (
          <Card key={travel.id}>
            <CardHeader className="p-0">
              <img src={travel.image} alt={travel.title} className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle>{travel.title}</CardTitle>
              <div className="flex items-center mt-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-1" />
                {travel.location}
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>{travel.rating}</span>
                  <span className="text-muted-foreground ml-1">({travel.reviews} reviews)</span>
                </div>
                <Avatar className="w-6 h-6">
                  <AvatarImage src={travel.user.avatar} alt={travel.user.name} />
                  <AvatarFallback><User className="w-4 h-4" /></AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/travel/${travel.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

