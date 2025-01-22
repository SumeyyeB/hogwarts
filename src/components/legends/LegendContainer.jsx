import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { data } from "../../helpers/data";
import { useState, Fragment } from "react";
import LegendCard from "./LegendCard";

const LegendContainer = () => {

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value); 
 
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  

  return (
    <div>
      <Form.Control
        className="w-50 mx-auto my-2"
        type="search"
        placeholder="Search Army Characters.."
        onChange={handleChange}
      />

      <Container className="p-3 my-3 card-container">
        <Row xs={1} md={2} xl={3} className="justify-content-center g-3">
          {filteredData.map((legend) => (
            // <Col key={legend.id}>
            //   <Card onClick={() => setShow(!show)}>
            //     {!show ? (
            //       <Card.Img variant="top" src={legend.img} />
            //     ) : (
            //       <>
            //       {/* <Fragment key={id}> Fragmentin avantajı key probu girebilmemiz. boş bırakırsak girmeyiz */}
            //         <Card.Header>
            //           <Card.Title>{legend.name}</Card.Title>
            //         </Card.Header>

            //         <ul className="mx-auto">
            //           {legend.statistics.map((item, index) => (
            //             <li key={index} className="list-unstyled h5 text-start">
            //               ⚽️ {item}
            //             </li>
            //           ))}
            //         </ul>
            //         <span>Hogwarts: {legend.official_career}</span>
            //       </>
            //     )}
            //   </Card>
            // </Col>
            <LegendCard key={legend.id} legend={legend} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;


