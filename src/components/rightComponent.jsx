import { UserCircleIcon } from "@heroicons/react/20/solid";
import Card from 'react-bootstrap/Card';

export default function RightComponent() {
     return (
          <>
               <div className="fixed right-0 top-0 w-1/5 bg-gray-100  overflow-auto">
                    <div className="flex items-center mx-4">
                         <UserCircleIcon className="h-16 w-16 text-gray-500" />
                         <div className="">
                              <span>John Doe</span><br />
                              <span>Free plan</span>
                         </div>
                    </div>
                    <div className="flex bg-red-300 mx-4">
                         <span>Fans also like</span>
                         <span className="fixed right-0 mr-4">See all</span>
                    </div>
                    <Card style={{ width: '17rem', padding: '0 16px 0 16px' }}>
                         <Card.Img variant="top" src="https://fakeimg.pl/600x400" />
                         <Card.Body>
                              <Card.Title>James Arthur</Card.Title>
                              <Card.Text>Artist</Card.Text>
                         </Card.Body>
                    </Card>
                    <div className="flex bg-red-300 mx-4">
                         <span>Fans also like</span>
                         <span className="fixed right-0 mr-4">See all</span>
                    </div>
                    <div className="flex items-center my-2 mx-4">
                         <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                         <div className="ml-4">
                              <span>Title</span><br />
                              <span>Autor</span>
                         </div>
                         <div className="fixed right-0 mr-4"><p>2min ago</p></div>
                    </div>
                    <div className="flex items-center my-2 mx-4">
                         <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                         <div className="ml-4">
                              <span>Title</span><br />
                              <span>Autor</span>
                         </div>
                         <div className="fixed right-0 mr-4"><p>2min ago</p></div>
                    </div>
                    <div className="flex items-center my-2 mx-4">
                         <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                         <div className="ml-4">
                              <span>Title</span><br />
                              <span>Autor</span>
                         </div>
                         <div className="fixed right-0 mr-4"><p>2min ago</p></div>
                    </div>
                    <div className="flex items-center my-2 mx-4">
                         <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                         <div className="ml-4">
                              <span>Title</span><br />
                              <span>Autor</span>
                         </div>
                         <div className="fixed right-0 mr-4"><p>2min ago</p></div>
                    </div>
                    <div className="flex items-center my-2 mx-4">
                         <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                         <div className="ml-4">
                              <span>Title</span><br />
                              <span>Autor</span>
                         </div>
                         <div className="fixed right-0 mr-4"><p>2min ago</p></div>
                    </div>
                    <div className="flex items-center my-2 mx-4">
                         <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                         <div className="ml-4">
                              <span>Title</span><br />
                              <span>Autor</span>
                         </div>
                         <div className="fixed right-0 mr-4"><p>2min ago</p></div>
                    </div>
                    <div className="flex items-center my-2 mx-4">
                         <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                         <div className="ml-4">
                              <span>Title</span><br />
                              <span>Autor</span>
                         </div>
                         <div className="fixed right-0 mr-4"><p>2min ago</p></div>
                    </div>
                    <div className="flex items-center my-2 mx-4">
                         <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                         <div className="ml-4">
                              <span>Title</span><br />
                              <span>Autor</span>
                         </div>
                         <div className="fixed right-0 mr-4"><p>2min ago</p></div>
                    </div>
                    <div className="flex items-center my-2 mx-4">
                         <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                         <div className="ml-4">
                              <span>Title</span><br />
                              <span>Autor</span>
                         </div>
                         <div className="fixed right-0 mr-4"><p>2min ago</p></div>
                    </div>
                    <div className="flex items-center my-2 mx-4">
                         <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                         <div className="ml-4">
                              <span>Title</span><br />
                              <span>Autor</span>
                         </div>
                         <div className="fixed right-0 mr-4"><p>2min ago</p></div>
                    </div>
               </div>
          </>
     )
}