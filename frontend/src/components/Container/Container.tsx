type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return ( 
    <div className='px-2 md:px-5 py-4 max-w-7xl mx-auto w-full'>
      {children}
    </div>
   );
}
 
export default Container;