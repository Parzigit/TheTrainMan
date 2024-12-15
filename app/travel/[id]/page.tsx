'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Star, Heart, CheckCircle, User } from 'lucide-react'

export default function TravelPage({ params }: { params: { id: string } }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isVisited, setIsVisited] = useState(false)

  const travel = {
    id: params.id,
    title: "Bali Paradise",
    location: "Bali, Indonesia",
    image: "/placeholder.svg?height=400&width=800",
    description: "Experience the beauty of Bali with its pristine beaches, lush rice terraces, and vibrant culture.",
    rating: 4.8,
    reviews: 120,
    user: { name: "Alex", avatar: "https://i.pravatar.cc/150?img=1" },
    dates: "September 1-7, 2023"
  }

  const reviews = [
    { id: 1, user: { name: "Emma", avatar: "https://i.pravatar.cc/150?img=3" }, rating: 5, content: "Absolutely breathtaking! The beaches were pristine and the local culture was fascinating." },
    { id: 2, user: { name: "Sam", avatar: "https://i.pravatar.cc/150?img=2" }, rating: 4, content: "Great experience overall. The food was amazing and the people were very friendly." },
    // Add more reviews...
  ]

  return (
    <div className="space-y-8">
      <img src={travel.image} alt={travel.title} className="w-full h-96 object-cover rounded-lg" />
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{travel.title}</h1>
          <div className="flex items-center mt-2 text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            {travel.location}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant={isWishlisted ? "secondary" : "outline"} 
            size="sm"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart className={`w-4 h-4 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
            {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
          </Button>
          <Button 
            variant={isVisited ? "secondary" : "outline"} 
            size="sm"
            onClick={() => setIsVisited(!isVisited)}
          >
            <CheckCircle className={`w-4 h-4 mr-2 ${isVisited ? 'fill-current' : ''}`} />
            {isVisited ? 'Visited' : 'Mark as Visited'}
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400 mr-1" />
          <span className="font-bold">{travel.rating}</span>
          <span className="text-muted-foreground ml-1">({travel.reviews} reviews)</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-5 h-5 mr-1" />
          <span>{travel.dates}</span>
        </div>
        <Avatar className="w-8 h-8">
          <AvatarImage src={travel.user.avatar} alt={travel.user.name} />
          <AvatarFallback><User className="w-4 h-4" /></AvatarFallback>
        </Avatar>
        <span>by {travel.user.name}</span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>About this travel</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{travel.description}</p>
        </CardContent>
      </Card>

      <Tabs defaultValue="reviews">
        <TabsList>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="map">Map</TabsTrigger>
        </TabsList>
        <TabsContent value="reviews" className="mt-6">
          <div className="space-y-4">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={review.user.avatar} alt={review.user.name} />
                      <AvatarFallback><User className="w-4 h-4" /></AvatarFallback>
                    </Avatar>
                    <CardTitle>{review.user.name}</CardTitle>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="ml-1">{review.rating}/5</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{review.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="photos">
          {/* Implement photo gallery */}
        </TabsContent>
        <TabsContent value="map">
          {/* Implement map component */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

