// Importing necessary page and react library
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import HeaderStory from "./HeaderStory";
import { StoryBoard } from "../lib/types/story-board";
import { useUser } from "../contexts/user-context";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const HistoryPage: React.FC = () => {
  // Returning History Page

  const [boards, setBoards] = useState<StoryBoard[]>([]);
  const user = useUser();

  useEffect(() => {
    let unsubscribeFirestore = () => {};
    if (user !== null) {
      const q = query(
        collection(db, "StoryBoards"),
        where("uid", "==", user.uid)
      );
      unsubscribeFirestore = onSnapshot(q, (querySnapshot) => {
        const storyBoards: StoryBoard[] = [];
        querySnapshot.forEach((doc) => {
          storyBoards.push(doc.data() as StoryBoard);
        });
        setBoards(storyBoards);
      });
    }

    return () => {
      unsubscribeFirestore();
    };
  }, []);

  return (
    //  Make the background same as the background from the assets
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/Background.png')` }}
    >
      {/* HELMET: manage changes to the document head in a React application. It allows
       to set elements like the title, meta tags, and other attributes within the 
       <head> of HTML document dynamically from React components. */}
      <Helmet>
        <title>History - Narrative Nest</title>
      </Helmet>

      {/* Taking Header Story Component */}
      <HeaderStory />

      {/* History Page */}
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h2 className="text-5xl font-bold mb-10 text-brown-800">
          Your Storyboards
        </h2>

        {boards.length === 0 ? (
          <div className="border-t border-brown-600 py-24">
            <div className="flex flex-col items-center mb-10">
              <img
                src="/EmptyHistory3.png"
                alt="Empty History"
                className="w-48 mb-4"
              />
              <p className="text-lg text-center text-brown-800 mb-4">
                No storyboards yet! Click 'New Storyboard' to start visualize
                your story.
              </p>

              {/* Link to Storyboard Maker Page */}
              <Link
                to="/storyboard"
                className="bg-brown-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-brown-600"
              >
                New Storyboard
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {
              boards.map((board: StoryBoard, index: number) => (
                <div className="flex flex-col p-4 bg-white bg-opacity-50 rounded-xl">
                  <img src={board.image} />
                  <p className="text-sm mt-6 text-neutral-700">{board.basePrompt}</p>
                  <h1>{board.prompt}</h1>
                  <p className="mt-10">{board.notes}</p>
                </div>
              ))
            }
          </div>
        )}
      </main>
      {/* History Page End */}

      {/* Taking Footer Section */}
      <Footer />
    </div>
  );
};

// Returning History Page
export default HistoryPage;
