import './App.css';
import styled from 'styled-components';


function App() {
    return (
        <div className="App">
            <Title>Styled-components <span>.attrs</span> method</Title>


            
            <Form>
                <Field/>
                <Field type="password" placeholder="goodbay"/>
                <Field type="date"/> {/* браузер захардкодил свои */}
                <Checkbox title="click me"/>
                <Checkbox />

            </Form>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 32px;
    span {
      color: #e91e63;
    }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;

const Field = styled.input.attrs((props) =>({
  type: props.type || "text",
  placeholder: props.placeholder || "Type smth..."
}))`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
`;

const Checkbox = styled.input.attrs( (props)=> {
  return {
    type: "checkbox",
    title: props.title || "Hello"
    
  }
})``

/* const Checkbox = styled.input.attrs( ({title})=> {
  return {
    type: "checkbox",
    title: title || "Hello"
    
  }
}) */

/* const Checkbox = styled.input.attrs( (props)=> {
  return {
    type: "checkbox",
    title: props.title || "Hello"
    
  }
})

const props = {
  type: "checkbox",
  title: "hello",
} */