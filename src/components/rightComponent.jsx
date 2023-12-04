import { UserCircleIcon } from "@heroicons/react/20/solid";
import Card from 'react-bootstrap/Card';

export default function RightComponent() {
     return (
          <>
               <div className="fixed right-0 top-0 w-1/5 bg-gray-50 py-4 h-full">
                    <div className="flex items-center mx-4 mb-8">
                         <UserCircleIcon className="h-16 w-16 text-gray-500" />
                         <div className="">
                              <span>John Doe</span><br />
                              <span>Free plan</span>
                         </div>
                    </div>
                    <div className="flex  mx-4">
                         <span className="text-lg font-bold">Fans also like</span>
                         <span className="fixed right-0 mr-4">See all</span>
                    </div>
                    <div className="px-4">
                         <Card style={{ width: '100%', margin: '5px 0', borderRadius: '10px' }}>
                              <Card.Img variant="top" src="https://fakeimg.pl/600x400" className="rounded-t-lg" />
                              <Card.Body className="p-2 bg-gray-200 rounded-b-lg">
                                   <Card.Title>James Arthur</Card.Title>
                                   <Card.Text>Artist</Card.Text>
                              </Card.Body>
                         </Card>
                    </div>
                    <div className="flex pt-2 mx-4">
                         <span className="text-lg font-semibold">Recent played</span>
                         <span className="fixed right-0 mr-4">See all</span>
                    </div>
                    <div className="flex items-center my-2 mx-4">
                         <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                         <div className="ml-4">
                              <span className="font-bold">Title</span><br />
                              <span>Autor</span>
                         </div>
                         <div className="fixed right-0 mr-4"><p>2min ago</p></div>
                    </div>
                    <div className="flex items-center my-2 mx-4">
                         <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                         <div className="ml-4">
                              <span className="font-bold">Title</span><br />
                              <span>Autor</span>
                         </div>
                         <div className="fixed right-0 mr-4"><p>2min ago</p></div>
                    </div>
                    <div className="flex items-center my-2 mx-4">
                         <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                         <div className="ml-4">
                              <span className="font-bold">Title</span><br />
                              <span>Autor</span>
                         </div>
                         <div className="fixed right-0 mr-4"><p>2min ago</p></div>
                    </div>
                    <div className="flex items-center my-2 mx-4">
                         <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                         <div className="ml-4">
                              <span className="font-bold">Title</span><br />
                              <span>Autor</span>
                         </div>
                         <div className="fixed right-0 mr-4"><p>2min ago</p></div>
                    </div>
                    <div className="flex items-center my-2 mx-4">
                         <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                         <div className="ml-4">
                              <span className="font-bold">Title</span><br />
                              <span>Autor</span>
                         </div>
                         <div className="fixed right-0 mr-4"><p>2min ago</p></div>
                    </div>
               </div>
          </>
     )
}