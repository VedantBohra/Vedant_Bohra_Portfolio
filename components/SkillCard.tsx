type props = {
    name: string,
    icon: React.ReactNode
}

export function SkillCard({name , icon}: props){

    return (
        <div className="flex flex-col gap-3 justify-center items-center p-6 border-2 border-black rounded-md">
            {icon}
            <p className="font-medium text-md">{name}</p>
        </div>
    )
}

