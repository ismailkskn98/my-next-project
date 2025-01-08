import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: string;
}

const posts: BlogPost[] = [
  {
    id: "1",
    title: "Bitcoin Cash Price Trend Including Tether",
    description:
      "Lorem ipsum dolor sit amet, quo omittam moderatius in, te cum mutat malorum. Autem ullum cu sed. Id per enim d",
    date: "27th, December 2018",
    category: "ICO",
    imageUrl: "/images/570x570.jpg",
  },
  {
    id: "2",
    title: "Bitfinex Introduces Trading for 12 Altcoins",
    description:
      "Lorem ipsum dolor sit amet, quo omittam moderatius in, te cum mutat malorum. Autem ullum cu sed. Id per enim d",
    date: "27th, December 2018",
    category: "ICO",
    imageUrl: "/images/570x570.jpg",
  },
  {
    id: "3",
    title: "Ripple Price Technical Analysis – XRP/USD",
    description:
      "Lorem ipsum dolor sit amet, quo omittam moderatius in, te cum mutat malorum. Autem ullum cu sed. Id per enim d",
    date: "27th, December 2018",
    category: "ICO",
    imageUrl: "/images/570x570.jpg",
  },
];

export default function BlogCards() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-6 text-white md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <Card className="h-full overflow-hidden border-black/80 bg-black/50 transition-shadow duration-300 hover:shadow-lg">
              <CardHeader className="p-0">
                <div className="relative aspect-[600/394] overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-4">
                  {post.category}
                </Badge>
                <h3 className="mb-3 line-clamp-2 text-2xl font-bold leading-tight text-white transition-colors hover:text-primary">
                  {post.title}
                </h3>
                <p className="line-clamp-2 text-white/80">{post.description}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <time className="text-sm text-white/80">{post.date}</time>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
