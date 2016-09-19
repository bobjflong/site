export default function(){
  this.transition(
    this.fromRoute('home'),
    this.toRoute('music'),
    this.use('fade', {duration: 100}),
    this.reverse('fade', {duration: 100})
  );
}
