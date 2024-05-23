import { Input, InputProps } from '@/components/ui/input';
interface InputIconProps extends InputProps {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}

export const InputIcon = ({ iconStart, iconEnd, ...props}: InputIconProps) => {
 return (
   <label className="[&:has(:focus-visible)]:ring-ring flex items-center p-0 [&:has(:focus-visible)]:ring-2 px-3 border rounded">
     {iconStart}
     <Input
       {...props}
       className="size-full ml-1 border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
     />
     {iconEnd}
   </label>
 );
};
