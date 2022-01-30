import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import { Provider } from "./components/store/context";
import NewTodo from "./components/NewTodo/NewTodo";

const App = () => {
  return (
    <>
      <Provider>
        <Card>
          <Form />
        </Card>
        <NewTodo />
      </Provider>
    </>
  );
};
export default App;
