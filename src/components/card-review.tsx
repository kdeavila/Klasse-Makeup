import { Star } from "lucide-react";
import { Card, CardHeader, CardContent, CardDescription } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";

interface Review {
    id: number;
    name: string;
    position: string;
    avatar: string;
    message: string;
    rating: number;
}

interface CardReviewProps extends Review {
    className?: string;
}

export function CardReview({ className, id, name, position, avatar, message, rating }: CardReviewProps) {
    return (
        <Card key={id} className={`w-full hover:border-[#ec4899] transition-colors duration-150 ${className}`}>
            <CardHeader className="flex flex-row items-center gap-4 pb-0">
                <Avatar>
                    <AvatarImage src={avatar} alt={`Avatar de ${name}`} />
                </Avatar>
                <div className="flex flex-col text-left">
                    <h3 className="text-base font-semibold">{name}</h3>
                    <p className="text-sm text-muted-foreground">{position}</p>
                </div>
            </CardHeader>

            <CardContent className="p-6">
                <CardDescription className="text-sm text-left leading-relaxed mb-4 text-wrap">
                    {message}
                </CardDescription>

                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}



