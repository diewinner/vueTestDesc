<template>
  <div class="favorites wrapper_component">
    <title-component :title="title"/>
    <inputs-checked :inputs="inputs"
                    :nameInput="nameInput"
    />
    <input-checked-item-content :inputsContent="filterContent"/>
  </div>
</template>

<script>
export default {
  computed: {
    filterContent() {
      return this.inputsContent.filter(el => el.season === this.$store.getters.getSelected)
    }
  },
  data() {
    return {
      title: 'favorites',
      nameInput: 'season',
      inputs: [
        {
          id: 'winterChoice',
          value: 'winter'
        },
        {
          id: 'springChoice',
          value: 'spring'
        },
        {
          id: 'summerChoice',
          value: 'summer'
        },
        {
          id: 'autumnChoice',
          value: 'autumn'
        },
      ],
      inputsContent: [
        {
          season: 'winter',
          bookName: 'The Book Eaters',
          author: 'By Sunyi Dean',
          description: 'An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.',
          img: 'book_w_1.png'
        },
        {
          season: 'winter',
          bookName: 'Cackle',
          author: 'By Rachel Harrison',
          description: 'Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.',
          img: 'book_w_2.png'
        },
        {
          season: 'winter',
          bookName: 'Dante: Poet of the Secular World',
          author: 'By Erich Auerbach',
          description: 'Auerbach\'s engaging book places the \'Comedy\' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante\'s uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante\'s main themes.',
          img: 'book_w_3.png'
        },
        {
          season: 'winter',
          bookName: 'The Last Queen',
          author: 'By Clive Irving',
          description: 'A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.',
          img: 'book_w_4.png'
        },

        {
          season: 'spring',
          bookName: 'The Body',
          author: 'By Stephen King',
          description: 'Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.',
          img: 'book_sp_1.png'
        },
        {
          season: 'spring',
          bookName: 'Carry: A Memoir of Survival on Stolen Land',
          author: 'By Toni Jenson',
          description: 'This memoir about the author\'s relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.',
          img: 'book_sp_2.png'
        },
        {
          season: 'spring',
          bookName: 'Days of Distraction',
          author: 'By Alexandra Chang',
          description: 'A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.',
          img: 'book_sp_3.png'
        },
        {
          season: 'spring',
          bookName: 'Dominicana',
          author: 'By Angie Cruz',
          description: 'A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.',
          img: 'book_sp_4.png'
        },

        {
          season: 'summer',
          bookName: 'Crude: A Memoir',
          author: 'By Pablo Fajardo & Sophie Tardy-Joubert',
          description: 'Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people',
          img: 'book_s_1.png'
        },
        {
          season: 'summer',
          bookName: 'Let My People Go Surfing',
          author: 'By Yvon Chouinard',
          description: 'Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.',
          img: 'book_s_2.png'
        },
        {
          season: 'summer',
          bookName: 'The Octopus Museum: Poems',
          author: 'By Brenda Shaughnessy',
          description: 'This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.',
          img: 'book_s_3.png'
        },
        {
          season: 'summer',
          bookName: 'Shark Dialogues: A Novel',
          author: 'By Kiana Davenport',
          description: 'An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.',
          img: 'book_s_4.png'
        },

        {
          season: 'autumn',
          bookName: 'Casual Conversation',
          author: 'By Renia White',
          description: 'White\'s impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don\'t, examining the possibilities around how we construct and communicate identity. ',
          img: 'book_a_1.png'
        },
        {
          season: 'autumn',
          bookName: 'The Great Fire',
          author: 'By Lou Ureneck',
          description: 'The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide',
          img: 'book_a_2.png'
        },
        {
          season: 'autumn',
          bookName: 'Rickey: The Life and Legend',
          author: 'By Howard Bryant',
          description: 'With the fall rolling around, one can\'t help but think of baseball\'s postseason coming up! And what better way to prepare for it than reading the biography of one of the game\'s all-time greatest performers, the Man of Steal, Rickey Henderson?',
          img: 'book_a_3.png'
        },
        {
          season: 'autumn',
          bookName: 'Slug: And Other Stories',
          author: 'By Megan Milks',
          description: 'Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds.',
          img: 'book_a_4.png'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.favorites {
  display: flex;
  flex-direction: column;
  gap: 40px;
  background: #FFFFFF;
}
</style>
