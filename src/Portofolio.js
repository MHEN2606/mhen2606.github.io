import Project from "./Data";

var Card = (props) => {
    return(
        <div className="bg-[#E1E1E1] rounded p-5">
            <div className="text-[20px] font-semibold">
                {props.name}
            </div>
            <div className="text-[16px]">
                {props.description}
            </div>
        </div>
    );
}

var Portofolio = () => {
    const data = Project.map(isi => {
        return(
            <Card 
            key = {isi.id}
            name = {isi.name}
            description = {isi.description}
            />
        )
    })
    return(
        <div className='p-10 space-y-3'>

        <div className='text-[32px] text-[#CBCBCB]'>
          Portofolio
        </div>

        <div className='text-[#CBCBCB] text-[20px]'>
            These are a list of school projects or personal projects that I've made
        </div>

        {data}

        </div>
    );
}

export default Portofolio