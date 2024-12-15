'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function ListsPage() {
  const [expandedList, setExpandedList] = useState<number | null>(null)

  const trainmanLists = [
    {
      id: 1,
      title: "Epic Adventures Around the Globe",
      description: "Embark on these unforgettable journeys across continents.",
      travels: [
        { id: 101, title: "Trans-Siberian Railway", location: "Moscow to Vladivostok", image: "/https://cdn.britannica.com/83/205583-050-5C064C68/Trans-Siberian-Railway-train-railroad-Yaroslavl-station-Russia.jpg?height=400&width=300" },
        { id: 102, title: "Machu Picchu Trek", location: "Cusco, Peru", image: "/https://cdn.britannica.com/83/205583-050-5C064C68/Trans-Siberian-Railway-train-railroad-Yaroslavl-station-Russia.jpg.svg?height=400&width=300" },
        { id: 103, title: "Great Barrier Reef Dive", location: "Queensland, Australia", image: "/https://cdn.britannica.com/83/205583-050-5C064C68/Trans-Siberian-Railway-train-railroad-Yaroslavl-station-Russia.jpg.svg?height=400&width=300" },
        { id: 104, title: "Sahara Desert Expedition", location: "Morocco", image: "/https://cdn.britannica.com/83/205583-050-5C064C68/Trans-Siberian-Railway-train-railroad-Yaroslavl-station-Russia.jpg.svg?height=400&width=300" },
        { id: 105, title: "Northern Lights Chase", location: "Tromsø, Norway", image: "/https://cdn.britannica.com/83/205583-050-5C064C68/Trans-Siberian-Railway-train-railroad-Yaroslavl-station-Russia.jpg.svg?height=400&width=300" }
      ]
    },
    {
      id: 2,
      title: "Cultural Immersions",
      description: "Dive deep into rich traditions and local experiences.",
      travels: [
        { id: 201, title: "Kyoto Tea Ceremony", location: "Kyoto, Japan", image: "/placeholder.svg?height=400&width=300" },
        { id: 202, title: "Flamenco Night in Seville", location: "Seville, Spain", image: "/placeholder.svg?height=400&width=300" },
        { id: 203, title: "Taj Mahal at Sunrise", location: "Agra, India", image: "/placeholder.svg?height=400&width=300" },
        { id: 204, title: "Carnival in Rio", location: "Rio de Janeiro, Brazil", image: "/placeholder.svg?height=400&width=300" },
        { id: 205, title: "Scottish Highland Games", location: "Braemar, Scotland", image: "/placeholder.svg?height=400&width=300" }
      ]
    },
    {
      id: 3,
      title: "Natural Wonders Exploration",
      description: "Witness the breathtaking beauty of our planet.",
      travels: [
        { id: 301, title: "Grand Canyon Hike", location: "Arizona, USA", image: "/placeholder.svg?height=400&width=300" },
        { id: 302, title: "Amazon Rainforest Expedition", location: "Brazil", image: "/placeholder.svg?height=400&width=300" },
        { id: 303, title: "Great Migration Safari", location: "Serengeti, Tanzania", image: "/placeholder.svg?height=400&width=300" },
        { id: 304, title: "Iguazu Falls Adventure", location: "Argentina/Brazil border", image: "/placeholder.svg?height=400&width=300" },
        { id: 305, title: "Zhangjiajie National Forest Park", location: "Hunan, China", image: "/placeholder.svg?height=400&width=300" }
      ]
    }
  ]

  return (
    <div className="space-y-12 py-6">
      <h1 className="text-3xl font-bold">Trainman Experience Lists</h1>
      <div className="space-y-16">
        {trainmanLists.map((list) => (
          <div key={list.id} className="space-y-4">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setExpandedList(expandedList === list.id ? null : list.id)}
            >
              <h2 className="text-2xl font-semibold">{list.title}</h2>
              <Button variant="ghost" size="icon">
                {expandedList === list.id ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </div>
            
            <div className="relative pl-4">
              <div className="flex items-center h-[300px]">
                {list.travels.map((travel, index) => (
                  <Link 
                    key={travel.id} 
                    href={`/travel/${travel.id}`}
                    className={`
                      absolute 
                      transition-all 
                      duration-300 
                      hover:transform 
                      hover:scale-105 
                      hover:z-50
                      ${index === 0 ? 'left-0' : ''}
                    `}
                    style={{ 
                      left: `${index * 160}px`,
                      zIndex: index
                    }}
                  >
                    <Card className="w-[200px] overflow-hidden shadow-xl">
                      <img 
                        src={travel.image} 
                        alt={travel.title} 
                        className="w-full h-[300px] object-cover"
                      />
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {expandedList === list.id && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
                {list.travels.map((travel) => (
                  <Link 
                    key={travel.id} 
                    href={`/travel/${travel.id}`}
                    className="transition-transform duration-300 hover:scale-105"
                  >
                    <Card className="overflow-hidden">
                      <img 
                        src={travel.image} 
                        alt={travel.title} 
                        className="w-full h-[200px] object-cover"
                      />
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

