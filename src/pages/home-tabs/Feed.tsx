import { 
    IonButtons,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  
  const Feed: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

        <IonCard className="ion-margin-bottom">
      <img alt="ORV" src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/475010814_122122994948676076_7176824817516082766_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEZI1UIdZOb618N4iS85oPErGSpMxHfuk-sZKkzEd-6T21bptyEPMY5IA0--b1-Fz62TNdJxgA6VgWwW9ATUOf9&_nc_ohc=lZpGzJKBs4wQ7kNvgEMiMLt&_nc_oc=Adhm6PoX3beNBW4XLiPJrcFILoEmodXNNAYQ10V8jjoKGb2RvG34fu-lPL67NzIEolg&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=AdSUdWVdcpChEQ2Fs0P1YLB&oh=00_AYBAnHqWAHa7oCt2aS7sRqOPNrAU73mk_minuFyzjHOJxQ&oe=67CA848A" />
      <IonCardHeader>
        <IonCardTitle>The Prophet: Omniscient Reader</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>First teaser for "Omniscient Reader's Viewpoint" live action movie📣. Releasing in Summer 2025</IonCardContent>
    </IonCard>

    <IonCard>
      <img alt="SL" src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/290905173_10159776384714340_4225162534160083466_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0b6b33&_nc_eui2=AeHMkf5donuu5kd8vigizemV0Mvpd8XxU0TQy-l3xfFTRHB9hblUjnbe1H0p21YV_PQxiuI1NhfRl185iHgVnqo3&_nc_ohc=Mvgc7AfcywgQ7kNvgGTQwoR&_nc_oc=AdhSK19rvDIsYfp_acr_yxHYGADcnbwzgeOR03yNiySF65lVo2sZ6XAhMigBQj97aKA&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=A8SFDDUmZm6bvtzOD145847&oh=00_AYAHyg9E4sbA14Pa943ccII-tSsKS2fCcHsO1B4ZDMQPiw&oe=67CA9026" />
      <IonCardHeader>
        <IonCardTitle>Solo Leveling</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>The worldwide dungeon-crawling phenomenon is getting an anime adaptation!</IonCardContent>
    </IonCard>

    <IonCard>
      <img alt="SL" src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/472710070_1004323248381339_8002596174401427613_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE53GbvSDdDNeK01-WOUBTgPKfNCMFmCAQ8p80IwWYIBORyPuqXy6nWwUnr5sm6TuRJtQ_eL0eKLfrU-wr3uUwJ&_nc_ohc=q6VrcMSLjAgQ7kNvgH62O6e&_nc_oc=AdjCwlq4IW37kwIdLQf537Fzbrg6dO5YZTSXjA1w211uWWBwr7VLL_RndVpDjYKmLqo&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=At2VrzL8p27YoPxN9X7gH0F&oh=00_AYBd9CbBh5MPFMufkUPT3kFKSx2y_6MHNuEmk3aeTtCcTg&oe=67CAA3FE" />
      <IonCardHeader>
        <IonCardTitle>Solo Leveling</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>Solo Leveling Season 2 to fully adapt the "Jeju Island Raid" arc‼️‼️‼️
The upcoming anime season will cover the following story arcs:
➡️ Red Gate
➡️ Demon Castle Part 1 & Retesting
➡️ Hunters Guild & Demon Castle Part 2
➡️ Jeju Island Raid</IonCardContent>
    </IonCard>
        

        </IonContent>
      </IonPage>
    );
  };
  
  export default Feed;