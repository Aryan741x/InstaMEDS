import Cards from './Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';

function All_Cards(props) {
  return (
    <section className={`${props.bgop} py-4`}>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Cards bg={props.b1}>
          <h2 className="text-2xl font-bold">{props.n1}</h2>
          <div className="flex flex-nowrap flex-row">
            <div>

            <p className="mt-2 mb-4">
              {/* {props.d1} */} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corrupti tempora officia maxime officiis repellendus sapiente obcaecati, ab animi quis.
            </p>
            </div>
          <div>
          <img className="object-right bg-white-300 w-24 h-24" src="..."></img>
          </div>
          </div>
            <a
              href="#"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              yooyyo
            </a>
          </Cards>
          <Cards bg={props.b2}>
           
          <h2 className="text-2xl font-bold">{props.n2}</h2>
          <div className="flex flex-nowrap flex-row">
            <div>

            <p className="mt-2 mb-4">
              {/* {props.d2} */} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem facere totam tempora quas quod adipisci.
            </p>
            </div>
          <div>
          <img className="object-right bg-white-300 w-24 h-24" src="..."></img>
          </div>
          </div>
            <a
              href="#"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Yyoo
            </a>
          </Cards>
        </div>
      </div>
    </section>
  );
}

export default All_Cards;