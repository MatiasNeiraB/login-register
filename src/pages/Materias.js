import { Table } from "react-bootstrap"

const Materias = () => {
return(
    <div className="text-center">
    <Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th>#</th>
                <th>Materia</th>
                <th>Apellido</th>
                <th>Curso</th>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Lengua</td>
                <td>Neira</td>
                <td>21i</td>
                <td><button className="btn btn-primary btn-sm">Gestionar</button></td>
            </tr>
        
        </tbody>
    </Table>
</div>
)
}

export default Materias