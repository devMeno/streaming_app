import { UserCircleIcon } from "@heroicons/react/20/solid";
import Card from 'react-bootstrap/Card';

export default function RightComponent() {
     return (
          <>
               <div className="fixed right-0 top-0 w-1/5 bg-gray-400">
                    <div className="flex items-center">
                         <UserCircleIcon className="h-16 w-16 text-gray-500" />
                         <div className="">
                              <span>John Doe</span><br />
                              <span>Free plan</span>
                         </div>
                    </div>
                    <div className="flex bg-red-300">
                         <span>Fans also like</span>
                         <span className="">See all</span>
                    </div>
                    <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src="https://fakeimg.pl/600x400" />
                         <Card.Body>
                              <Card.Title>James Arthur</Card.Title>
                              <Card.Text>Artist</Card.Text>
                         </Card.Body>
                    </Card>
                    <div className="flex bg-red-300">
                         <span>Fans also like</span>
                         <span className="">See all</span>
                    </div>
               </div>
          </>
     )
}