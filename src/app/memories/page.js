
import memories from "@/data/memories"

export default function Memories() {

    const memoriesElems = memories.map((memory, index) => {
        return (
            <li className="list-group-item py-4" key={index}>
                <div>{memory.message}</div>
                <div className="fst-italic">- {memory.name === "" ? "Uncredited" : memory.name}</div>
            </li>
        )
    })

    return(
        <div className="container">
            <p className="pt-3 fw-bold">Have a memory of Dave LeWarne you'd like to share? We'd love to read it. <a href="https://form.jotform.com/243655021912047">Click here</a> to add a submission.</p>
            <ul className="list-group list-group-flush">
                {memoriesElems}
            </ul>
        </div>
    )
}