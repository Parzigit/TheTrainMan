"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Heart, Star, PenLine, Calendar, ListTodo } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
export default function Home() {
  const [isTrack, setIsTrack] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true); // Start transition
      setIsTrack((prev) => !prev); // Toggle text
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => {
        setTransitioning(false); // End transition after 1 second
      }, 1000); // Transition duration

      return () => clearTimeout(timer);
    }
  }, [transitioning]);

  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Track your travels",
      description:
        "Keep track of every journey you've experienced (or just start from the day you join)",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Show some love",
      description:
        "Share your appreciation for favorite destinations and reviews with a 'like'",
    },
    {
      icon: <PenLine className="w-6 h-6" />,
      title: "Write and share",
      description:
        "Write and share reviews, and follow others to read their travel stories",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Rate your experiences",
      description:
        "Rate each journey on a five-star scale to record and share your reaction",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Travel diary",
      description:
        "Keep a diary of your travels (and upgrade to Pro for comprehensive stats)",
    },
    {
      icon: <ListTodo className="w-6 h-6" />,
      title: "Create lists",
      description:
        "Compile and share lists of destinations on any topic and keep a wishlist",
    },
  ];
  const recentStories = [
    {
      title: "15 Most Scenic Train Routes",
      image: "https://media.cntraveler.com/photos/65baab06f6987e07d4c9b829/4:3/w_5332,h_3999,c_limit/Coastal%20Classic%20Train%20-%20Bartlett%20Glacier%20-%20Mike%20Gilroy.jpg?height=200&width=300",
      description: "From the Swiss Alps to the Canadian Rockies, these train journeys offer breathtaking views."
    },
    {
      title: "Adventure of the Year",
      image: "https://rezkit-tour-images.b-cdn.net/01h7ywwd7at70t98wdj69emng5/images/01H8Y65SJGBF7G6Y7KHPKKEHQE.png?width=1920&height=700&crop=1980%2C721%2C0%2C189?height=200&width=300",
      description: "Discover this year's most thrilling and unique travel experiences across the globe."
    },
    {
      title: "Hidden Gems of Asia",
      image: "https://www.trawell.in/blog/wp-content/uploads/2018/08/Bali_Main2-730x410.jpg?height=200&width=300",
      description: "Explore lesser-known destinations that offer authentic cultural experiences."
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://i.pinimg.com/736x/d4/af/0a/d4af0a0edffa93fdb8399b0688dde772.jpg?height=800&width=1200"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center space-y-6 max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            <span className="block">
              <span
                className={`transition-opacity duration-1000 ${
                  transitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                {isTrack ? (
                  <span className="text-green-500">Track</span>
                ) : (
                  <span className="text-blue-500">Map</span>
                )}
              </span>{" "}
              your journeys.
            </span>

            <span className="block">
              Save those travels you{" "}
              <span
                className={`transition-opacity duration-1000 ${
                  transitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                {isTrack ? (
                  <span className="text-green-500">wish to </span>
                ) : (
                  <span className="text-blue-500">wish to </span>
                )}
              </span>{" "}
              explore.
            </span>

            <span className="block">
              Tell your friends what&apos;s{" "}
              <span
                className={`transition-opacity duration-1000 ${
                  transitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                {isTrack ? (
                  <span className="text-green-500">goooood.</span>
                ) : (
                  <span className="text-blue-500">goooood.</span>
                )}
              </span>
            </span>
          </h1>

          <br />
          <br />
          <Dialog>
            <DialogTrigger asChild>
            <Button size="lg" className="bg-yellow-600 hover:bg-green-700">
            Get started — it&apos;s free!
          </Button>            
          </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Sign In or Create Account</DialogTitle>
                <DialogDescription>
                  Please sign in to your account or create a new one to access all features.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Button>Sign In with Google</Button>
                <Button>Sign In with Email</Button>
                <Button variant="outline">Create New Account</Button>
              </div>
            </DialogContent>
          </Dialog>
          <p className="font-bold text-gray-300">Social travel blogging and discovery</p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="text-primary">{feature.icon}</div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
        {/* Recent Stories */}
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">The Train-men Journeys</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-xl mb-2">{story.title}</h3>
                  <p className="text-muted-foreground">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Extra Space for Scrolling */}
          <div className="h-20"></div>
        </div>
    </div>
  );
}

