import Table from './tablejs.js';

const table = new Table({
  columns: ["Name", "Email", "No Hp","Jabatan"],
  data: [
    ["Edi Hartono", "edi.eduwork@gmail.com", "08921212312", "Manager"],
    ["Dodi Prakoso", "dodi@upscale.id", "081232143", "Staff finance"],
    ["fendi", "fendi1122@gmail.com", "081231252312", "Staff Produksi"]
  ]
});
const app = document.getElementById("app");
table.render(app);

