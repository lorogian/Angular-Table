import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
    displayedColumns: string[] = ['id', 'birthDate', 'firstName', 'lastName','gender','hireDate'];
    dataSource = [
        {
            "id": 1,
            "birthDate": "1953-09-02",
            "firstName": "Georgi",
            "lastName": "Facello",
            "gender": "M",
            "hireDate": "1986-06-26",
        },
        {
            "id": 2,
            "birthDate": "1964-06-02",
            "firstName": "Bezalel",
            "lastName": "Simmel",
            "gender": "F",
            "hireDate": "1985-11-21",
        },
        {
            "id": 3,
            "birthDate": "1959-12-03",
            "firstName": "Parto",
            "lastName": "Bamford",
            "gender": "M",
            "hireDate": "1986-08-28",
        },
        {
            "id": 4,
            "birthDate": "1954-05-01",
            "firstName": "Chirstian",
            "lastName": "Koblick",
            "gender": "M",
            "hireDate": "1986-12-01",
        },
        {
            "id": 5,
            "birthDate": "1955-01-21",
            "firstName": "Kyoichi",
            "lastName": "Maliniak",
            "gender": "M",
            "hireDate": "1989-09-12",
        },
        {
            "id": 6,
            "birthDate": "1953-04-20",
            "firstName": "Anneke",
            "lastName": "Preusig",
            "gender": "F",
            "hireDate": "1989-06-02",
        },
        {
            "id": 7,
            "birthDate": "1957-05-23",
            "firstName": "Tzvetan",
            "lastName": "Zielinski",
            "gender": "F",
            "hireDate": "1989-02-10",
        },
        {
            "id": 8,
            "birthDate": "1958-02-19",
            "firstName": "Saniya",
            "lastName": "Kalloufi",
            "gender": "M",
            "hireDate": "1994-09-15",
        },
        {
            "id": 9,
            "birthDate": "1952-04-19",
            "firstName": "Sumant",
            "lastName": "Peac",
            "gender": "F",
            "hireDate": "1985-02-18",
        },
        {
            "id": 10,
            "birthDate": "1963-06-01",
            "firstName": "Duangkaew",
            "lastName": "Piveteau",
            "gender": "F",
            "hireDate": "1989-08-24",
        },
      ];
}
