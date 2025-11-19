export interface FormProps {
    isLogin?: boolean;
    action: string;
    onHandleSetAction: (action: string) => void;
}