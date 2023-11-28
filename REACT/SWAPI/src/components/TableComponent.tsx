import {Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

type Person = {
  name: string,
  height: string,
  hair_color: string,
  gender: string
}
interface TableProps {
  isHidden: boolean;
  people: Person[]
}
const TableComponent = ({isHidden, people}: TableProps) => {

  return (
    <>
      <Container fixed>
        <TableContainer hidden={isHidden} component={Paper}>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Height</TableCell>
                <TableCell>Hair Color</TableCell>
                <TableCell>Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {people.map((person, index) => (
                <TableRow key={index}>
                  <TableCell>{person.name}</TableCell>
                  <TableCell>{person.height}</TableCell>
                  <TableCell>{person.hair_color}</TableCell>
                  <TableCell>{person.gender}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default TableComponent;