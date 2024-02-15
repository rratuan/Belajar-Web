import os
import CRUD as CRUD

if __name__ == "__main__":
    sistem_operasi = os.name

    while(True):
        match sistem_operasi:
            case "posix": os.system("clear")
            case "nt": os.system("cls") 
        
        print('SELAMAT DATANG DI PROGRAM')
        print('DATABASE PERPUSTAKAAN')
        print('=========================')

        print(f'1. Read Data')
        print(f'2. Create Data')
        print(f'3. Update Data')
        print(f'4. Delete Data\n')

        user_option = input('Masukkan opsi : ')

        print('=========================')
        
        match user_option:
            case "1" : print('Read Data')
            case "2" : print('Create Data')
            case "3" : print('Update Data')
            case "4" : print('Delete Data')

        print('=========================\n')

        is_done = input('Sudah Selesai (y/n) : ')

        if is_done.lower() == 'y':
            break
    
    print('PROGRAM SELESAI TERIMA KASIH')