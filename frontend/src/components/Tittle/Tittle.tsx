type Props = {
  title: string;
}

const Tittle = ({ title }: Props) => {
  return ( 
    <div className='mt-8 text-3xl border-b-4 border-b-evergreen-light w-fit font-bold text-evergreen'> {title} </div>
   );
}
 
export default Tittle;