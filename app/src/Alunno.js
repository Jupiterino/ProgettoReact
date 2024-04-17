export default function Alunno({nome}){

    const [eliminazione, setEliminazione] = useState(false); //VARIABILE DI STATO!


    async function deleteAlunno(id) {
        try {
            const res = await fetch(`http://localhost:8080/alunni/${id}`, {
                method: "delete",
            });
            console.log(res);
        } catch (error) {
            console.error(error);
        }
        aggiornaAlunni();
    }
}