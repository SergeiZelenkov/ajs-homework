export default function healthLevel ({name, health}) {
   console.log(name);
   if(health > 50) {
      return 'healthy';
   }
   if(health >= 15) {
      return 'wounded';
   }
   return 'critical';
}