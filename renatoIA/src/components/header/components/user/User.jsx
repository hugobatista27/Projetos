import './user.css';

export const User = () => {
  return (
    <div className='user'>
        <button className='upgrade'>
            Fazer upgrade para o premium
        </button>
        <a href="#">
            <img src="/header/usericon.svg" alt="user" />
        </a>
    </div>
  )
}
