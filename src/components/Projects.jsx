import React from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Element } from "react-scroll";
import styled from "styled-components";
// Data
import { filteredProjects, projectsData } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";

const StyledSection = styled.section``;

export default function Projects() {
  const [, setMainProjects] = React.useState();
  const { theme } = useAppContext();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);

  React.useEffect(
    function () {
      const tempData = [];
      data.forEach((el, i) => (tempData[i] = Object.create(el)));
      if (data.length !== 0 && filteredProjects.length !== 0) {
        const tempArray = tempData.filter((obj) =>
          filteredProjects.includes(obj.name)
        );
        tempArray.length !== 0
          ? setMainProjects([...tempArray])
          : setMainProjects([...tempData.slice(0, 3)]);
      } else {
        setMainProjects([...tempData.slice(0, 3)]);
      }
    },
    [data]
  );

  return (
    <Element name={"Projects"} id="projects">
      <StyledSection className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Projects</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          {isLoading && (
            <Container className="d-flex">
              <Loading />
            </Container>
          )}
          {error && <h2 className="text-center">{error}</h2>}
          {!error && data.length === 0 && (
            <h2 className="text-center">
              Oops, you do not have any GitHub projects yet...
            </h2>
          )}
          {projectsData.length !== 0 && (
            <>
              <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
                {projectsData.map(function ({
                  id,
                  image,
                  name,
                  description,
                  url,
                }) {
                  return (
                    <Col key={id}>
                      <StyledCard
                        theme={theme}
                        image={image}
                        name={name}
                        description={description}
                        url={url}
                      />
                    </Col>
                  );
                })}
              </Row>
            </>
          )}
        </Container>
      </StyledSection>
    </Element>
  );
}
