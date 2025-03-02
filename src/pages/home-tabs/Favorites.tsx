import { 
    IonButtons,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle,
      IonContent, 
      IonHeader, 
      IonItem, 
      IonLabel, 
      IonList, 
      IonMenuButton, 
      IonPage, 
      IonThumbnail, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  
  const Favorites: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Favorites</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>The things that I love 💖</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Books" src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t45.5328-4/481759495_612744041613150_810184457103994968_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHbwSkO3uoMTu58wO5Y8OjbrU_WxihGiTitT9bGKEaJOPfuOHpWkRdilJmLNnw1K23l6m2_M1dblbIyemP_x1d3&_nc_ohc=43J86JsGXUcQ7kNvgHhuxDu&_nc_oc=Adj1E3pM-mDhBp_w8MlKIRuOm7ylukM7rh9Cg9Uthyl-EpNnKKr8Yet5bOxsKY8E0Ak&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=AV7xLsmsGaPGDUce1Cp8jyg&oh=00_AYA7Vfm-MVQfXaT5B4jpblKNK48ZwNKdUXIonkB0uIlafA&oe=67CAB5D1" />
            </IonThumbnail>
            <IonLabel>Reading</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Movie" src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/480771178_122163366314311010_1085654988717556557_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFadCcugVX9WHWscHE9ufSNOSEQlWq3SAs5IRCVardICxj4H-OeDwdjoGOBhs_pilsKmlO-NC9E_9CGfzCzG8wV&_nc_ohc=PJHxXf2JcUkQ7kNvgFne7Bz&_nc_oc=Adi1sGO0QQ0oexnWyy14RZgS86XPL2Cq3iqlBvWtNWMJFnnnSxiDeKmzdBHfqxAUbTo&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=AEotTzgf3CQCnH_nFhT0wW6&oh=00_AYCcHtyDKubJXhtAwaBi2B2cuX2AiPlQbPqVK8Gcq9Qf7g&oe=67CAB697" />
            </IonThumbnail>
            <IonLabel>Movie Marathon</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Kitty" src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/476491268_646536487722522_6846896374285213459_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFH1djFZRG4AadExLA8N7LKPQ88f5daqOo9Dzx_l1qo6nX19IPMmXr48kLsq-y4bdOrIpzXhX4n9Z8-A41yHiwB&_nc_ohc=sCFfTtgIT1oQ7kNvgF4I_pR&_nc_oc=AdgjfGNOrHARDLvvh_eL6F4iylkShnos5UhklUnO0QloGkVzVZCrAWmlpSYZvmzSZ2w&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=Auw2ps30F8SKYxEKPuJZ8mw&oh=00_AYCwlNJtIaoj4hoZ6wHG5BuZuQaUwFgSH21IZRYFIIOXPg&oe=67CA9247" />
            </IonThumbnail>
            <IonLabel>Hello Kitty</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Frisbee" src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/475306403_122125121852594882_1702794426792714697_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH6JaSLtxKITqMRuzEfLlXa3bhjmiwdbDfduGOaLB1sNwjqT3xezA2wjtpOxtgRogBYY6l4Z71dQCEZEze0oTCK&_nc_ohc=Le51h8GznrQQ7kNvgEVtkj0&_nc_oc=AdgSjng9C7tXtuqDzMHW8MVdWejN2rYM-sd2QcdGX7-E51BVsGBJj5g2kj85uC_Fd04&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=AI8k9RaJSNa-JwaJ7bQsdrF&oh=00_AYBwllKs7F8bJs8ZVaihetWwEbGjQV1myDUIVK-mLI7Rrg&oe=67CAB057" />
            </IonThumbnail>
            <IonLabel>Frisbee</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Fam" src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/482021962_1474699443489107_614274013316868937_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeERzO1bFG8ceNut5JFHuD8ib70PLqlxsFFvvQ8uqXGwUceGvagxveQ1s-uhljurABMO5YPRye4kvVcOHyNeS697&_nc_ohc=NitB28GRrTgQ7kNvgHb1DF9&_nc_oc=AdhA7YdRjg8etjGnD9yJTEuv74fvTo9p3yN6iLRJN9WHBPMcQoqNbAkVYfbiKE4UZN8&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=ArjqOneerh007BUgQBPj6w9&oh=00_AYBikTljosAaHSCyDyHNefzKGlQDBpGMynaMwENEfSMFZQ&oe=67CA8710" />
            </IonThumbnail>
            <IonLabel>Family</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Favorites;