function ProjectCard(props: { name: string; desc: string; image: string; link: string}) {
    const name = props.name;
    const desc = props.desc;
    const img = props.image;
    const link = props.link;

    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center justify-between w-2/6 h-48 text-white bg-zinc-600 rounded-xl overflow-hidden">
                <div className="flex flex-col px-4 text-wrap">
                    <p className="text-3xl font-semibold">{name}</p>
                    <p className="text-m mt-10 line-clamp-2">{desc}</p>
                </div>
                <a href={link} target="_blank">
                    <img className="max-w-48 object-contain py-4 pr-4 ml-2" src={img}></img>
                </a>
            </div>
        </div>
    )
  }
  
export default ProjectCard;