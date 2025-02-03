
type THeader ={
    header:string;
}
const SectionTitle :React.FC<THeader>= ({header}) => {
    return (
        <div className="text-center font-title md:w-4/12 py-10 mx-auto my-8 ">
            <h3 className=" border-y-4 border-[#003d1f]  py-5 text-5xl">{header}</h3>
        </div>
    );
};

export default SectionTitle;