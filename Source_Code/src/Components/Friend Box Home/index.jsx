import React from "react"
import "./styles.css"
import Addfriend from "../Add Friend Button"

export default function FreindListHome() {
  return (
    <div className="freind-list-home">
      <div className="frame-74 clip-contents">
        <div className="frame-86">
          <p className="friend-list">Friend List</p>
          <div className="frame-149">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7soxun7ipnb-229%3A9971?alt=media&token=7778ba84-30e6-4791-a6ed-1ea63a66f04e"
              alt="Not Found"
              className="no-content-backup"
            />
            <div className="frame-148">
              <p className="no-added-friends">No added friends!</p>
              <div className="frame-85">
                <p className="add-friends-by-clicking">
                  Add friends by clicking the{" "}
                </p>
                <Addfriend/>
                <p className="add-friends-by-clicking">button</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
