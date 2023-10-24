import React from 'react'
import '../loginpage/LoginPage.css';

function LoginPage() {

    const handleLogin = () => {
        // 로그인 처리 코드
      };
    
      const handleLogout = () => {
        alert('로그아웃 되었습니다.');
      };

    return (
        <div className="login">
          <form action="#">
            <fieldset>
              <legend>로그인 구역</legend>
    
              <input type="text" id="signInEmail" placeholder="아이디(E-mail)을 입력해 주세요" />
              <input type="password" id="signInPassword" placeholder="비밀번호를 입력해 주세요" />
              <ul>
                <li><a href="#">아이디/비밀번호찾기</a></li>
                <li><a href="jtm.html">회원가입</a></li>
              </ul>
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-block' }}>
                  <button className="button_B" type="button" id="signInButton" onClick={handleLogin}>
                    로그인
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      );
    }

export default LoginPage