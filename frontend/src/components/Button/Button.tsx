import classNames from 'classnames';

type Props = {
  title: string;
  variant?: 'light' | 'dark';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (title: any) => void;
}

const Button = ({ title, variant = 'dark', onClick }: Props) => {
  return ( 
    <button 
      className={classNames([
        'bg-evergreen-light px-4 py-2 rounded-lg shadow font-medium mt-3',
        variant === 'dark' && 'bg-evergreen-light text-white',
        variant === 'light' && 'bg-white border-2 border-evergreen-light text-evergreen-light',
      ])}
      onClick={onClick}
    >
      {title} 
    </button>
   );
}
 
export default Button;