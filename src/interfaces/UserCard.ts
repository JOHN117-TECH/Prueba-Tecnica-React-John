import { User } from "./User";

export interface UserCardProps {
    user: User;
    onClick: (user: User) => void;
}