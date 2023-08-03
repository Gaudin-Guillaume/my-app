


<div class="w-screen flex items-center justify-center h-screen">
<div class="page flex  justify-center gap-8" style="width:100vw; max-width:1100px; padding-right:80px; padding-left:80px;">
<div class="flex flex-col gap-8">
  <div class="text-3xl">Contactez nous</div>
  <p>Besoin de plus d'information ? vous pouvez nous contacter pour de plsu ample informations sur le sujet de votre choix. Vous pouvez nous contacter par mail via le formulaire suivant ou par téléphone au numéro ci-dessous.</p> <br/><br/>
  <ul class="text-md flex flex-col gap-4">
    <li class="flex gap-4 items-center"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm3.288,11.115l-1.775,1.775c-2.027-.773-3.521-2.208-4.403-4.403l1.775-1.775-2.712-2.712-1.378,1.378c-.54,.539-.795,1.249-.795,1.957,0,3.914,5.032,8.666,8.666,8.666,.708,0,1.418-.256,1.957-.795l1.378-1.378-2.712-2.712Z"/></svg>
      01 84 76 00 59</li>
    <li class="flex gap-4 items-center"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="M12,0A11,11,0,0,0,4.25,18.806l3.943,3.641a5.442,5.442,0,0,0,7.593.02l3.992-3.689A11,11,0,0,0,12,0Zm6.392,17.337-3.984,3.681A3.513,3.513,0,0,1,9.571,21L5.636,17.364A9,9,0,1,1,21,11,8.922,8.922,0,0,1,18.392,17.337ZM16.71,7.663l-3-2.081a3.008,3.008,0,0,0-3.42,0l-3,2.081A3,3,0,0,0,6,10.128V13.5A2.5,2.5,0,0,0,8.5,16h7A2.5,2.5,0,0,0,18,13.5V10.128A3,3,0,0,0,16.71,7.663ZM16,13.5a.5.5,0,0,1-.5.5H14V12a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v2H8.5a.5.5,0,0,1-.5-.5V10.128a1,1,0,0,1,.43-.822l3-2.081a1.006,1.006,0,0,1,1.14,0l3,2.081a1,1,0,0,1,.43.822Z"/></svg>
      112 Bureaux de la Coline, 1 rue Royal, 92210 Saint-Cloud</li>
    <li class="flex gap-4 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24"><path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"/></svg><a mailto="guillaume.gaudin@m2i-group.fr">contact@M2i-group.fr</a></li>
  </ul>
</div>
  <Form on:submit={handleSubmit} style="min-width:50%; display:flex; flex-direction:column;">

      <FormGroup>
          <TextInput labelText="Name" name="name" 
              on:change={handleChange} bind:value={$form.name}/>
      </FormGroup>
  
      <FormGroup>
          <TextInput labelText="Email" name="email" type="email" 
          on:change={handleChange} bind:value={$form.email}/>
      </FormGroup>
  
      
      <FormGroup>
          <TextArea labelText="Message" name="message" type="textarea"
          on:change={handleChange} bind:value={$form.message}/>
      </FormGroup>

      <Button type="submit" style="all:unset; padding:8px 16px; background-color:#15514F; color:white; width:fit-content; align-self:self-end;" disabled={$isSubmitting}>Submit</Button>
  </Form>
</div>
</div>
