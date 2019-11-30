import React, { Component } from 'react';
import PostItem from '../postt/index'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Júlio Alcantara",
          avatar: "https://api.adorable.io/avatars/50/teste.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a RocketSeat está contratando ?",
        comment: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://api.adorable.io/avatars/50/user.png",
            },
            content: "Diego Fernandes A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://api.adorable.io/avatars/50/teste.png"
        },
        date: "04 Jun 2019",
        content: "Fala galera, blz ?",
        comment: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "https://api.adorable.io/avatars/50/user.png",
            },
            content: "Clara Lisboa Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 3,
            author: {
              name: "Lucas",
              avatar: "https://api.adorable.io/avatars/50/user.png",
            },
            content: "Cézar Toledo Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      },
    ]
  }

  render() {
    const { posts } = this.state;

    return (
      <div className='post'>
        {posts.map(post =>
          <div>
            <div>
              <PostItem key={post.id} {...post} />
            </div>
          </div>
        )}
      </div>
    )
  }
}


export default PostList;