import React from 'react';
import './App.css';
import BoardListItem from './components/BoardList/BoardListItem';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const myBoardListItem = {
        boardNumber: 1,
        title: "게시물 제목",
        content: "게시물 내용",
        boardTitleImage: "이미지 경로",
        favoriteCount: 0,
        commentCount: 0,
        viewCount: 0,
        writeDatetime: "2023-03-01",
        writerNickname: "ㅇㅇ",
        writerProfileImage: "ㅇㅇ",
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<BoardListItem boardListItem={myBoardListItem} />} />
            </Routes>
        </Router>
    );
}

export default App;