'use client'

import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function MapPage() {
  const [selectedTravel, setSelectedTravel] = useState(null)

  const travels = [
    { name: "Tokyo", coordinates: [139.6917, 35.6895] },
    { name: "Paris", coordinates: [2.3522, 48.8566] },
    { name: "New York", coordinates: [-74.0060, 40.7128] },
    { name: "Sydney", coordinates: [151.2093, -33.8688] },
    { name: "Cape Town", coordinates: [18.4241, -33.9249] },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Your Travel Map</h1>
      <div className="relative">
        <ComposableMap projection="geoMercator">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#D6D6DA"
                />
              ))
            }
          </Geographies>
          {travels.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle 
                r={5} 
                fill="#FF5533" 
                stroke="#fff" 
                strokeWidth={2} 
                onMouseEnter={() => setSelectedTravel({ name, coordinates })}
                onMouseLeave={() => setSelectedTravel(null)}
              />
            </Marker>
          ))}
        </ComposableMap>
        {selectedTravel && (
          <Card className="absolute top-4 left-4 w-64">
            <CardHeader>
              <CardTitle>{selectedTravel.name}</CardTitle>
              <CardDescription>
                Lat: {selectedTravel.coordinates[1]}, Lon: {selectedTravel.coordinates[0]}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>You visited this place on [Date]</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

