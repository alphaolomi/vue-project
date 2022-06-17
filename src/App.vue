<script setup>
import fetch from "cross-fetch";

import { ref, onMounted } from "vue";
globalThis.fetch = fetch;
const students = ref(null);
onMounted(async () => {
  const s = await (await fetch("http://localhost:8081/")).json();
  console.log(s);
  students.value = s;
});
</script>
<template>
  <div class="container">
    <h1>Students</h1>
    <table class="table table-striped table-hover">
    <tr>
      <th>First name</th>
      <th>Middle name</th>
      <th>Surname</th>
      <th>Reg no</th>
      <th>Programme</th>
    </tr>

    <tbody>
      <!-- Loop with key -->
      <tr v-for="(student, index) in students" :key="index">
        <td>{{ student.firstName }}</td>
        <td>{{ student.middleName }}</td>
        <td>{{ student.surname }}</td>
        <td>{{ student.regNo }}</td>
        <td>{{ student.programme }}</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>
