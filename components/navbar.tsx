import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Globe, Search, Train, User } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
        <Globe className="h-8 w-8" />
          <Train className="h-6 w-6" />
          <span className="text-xl font-New-York">The Train~man</span>
        </Link>
        <div className="flex-1 max-w-sm mx-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search destinations..." className="pl-8" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">
            <Link href="/map">Map</Link>
          </Button>
          <Button variant="ghost">
            <Link href="/trending">Trending</Link>
          </Button>
          <Button variant="ghost">
            <Link href="/lists">Lists</Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Sign In / Create Account</Button>
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
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback><User /></AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  )
}

