package com.kpuls.project.sejati.projectblk;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.kpuls.project.sejati.projectblk.BasicView1.BasicView1;
import com.kpuls.project.sejati.projectblk.BelajarIntent.BelajarIntent;
import com.kpuls.project.sejati.projectblk.BelajarLayout.BelajarLayout;
import com.kpuls.project.sejati.projectblk.DataPribadi.DataPribadi;
import com.kpuls.project.sejati.projectblk.GantiGambar.GantiGambar;
import com.kpuls.project.sejati.projectblk.GantiWarna.GantiWarna;
import com.kpuls.project.sejati.projectblk.KalkulatorSaya.KalkulatorSaya;
import com.kpuls.project.sejati.projectblk.LuasPersegiPanjang.LuasPersegiPanjang;
import com.kpuls.project.sejati.projectblk.ToastNumber.ToastNumber;
import com.kpuls.project.sejati.projectblk.WasitDigital.WasitDigital;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button DataPribadi= findViewById(R.id.kurang);
        DataPribadi.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent DataPribadi = new Intent(MainActivity.this, DataPribadi.class);
                startActivity(DataPribadi);
            }
        });
        Button GantiGambar= findViewById(R.id.kali);
        GantiGambar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent GantiGambar = new Intent(MainActivity.this, GantiGambar.class);
                startActivity(GantiGambar);
            }
        });
        Button GantiWarna= findViewById(R.id.bagi);
        GantiWarna.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent GantiWarna = new Intent(MainActivity.this, GantiWarna.class);
                startActivity(GantiWarna);
            }
        });
        Button ToastNumber= findViewById(R.id.button5);
        ToastNumber.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent ToastNumber = new Intent(MainActivity.this, ToastNumber.class);
                startActivity(ToastNumber);
            }
        });
        Button WasitDigital= findViewById(R.id.button6);
        WasitDigital.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent WasitDigital = new Intent(MainActivity.this, WasitDigital.class);
                startActivity(WasitDigital);
            }
        });
        Button BelajarIntent= findViewById(R.id.button7);
        BelajarIntent.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent BelajarIntent = new Intent(MainActivity.this, BelajarIntent.class);
                startActivity(BelajarIntent);
            }
        });
        Button BelajarLayout= findViewById(R.id.button8);
        BelajarLayout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent BelajarLayout = new Intent(MainActivity.this, BelajarLayout.class);
                startActivity(BelajarLayout);
            }
        });
        Button KalkulatorSaya= findViewById(R.id.button9);
        KalkulatorSaya.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent KalkulatorSaya = new Intent(MainActivity.this, KalkulatorSaya.class);
                startActivity(KalkulatorSaya);
            }
        });
        Button LuasPersegiPanjang= findViewById(R.id.button10);
        LuasPersegiPanjang.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent LuasPersegiPanjang = new Intent(MainActivity.this, LuasPersegiPanjang.class);
                startActivity(LuasPersegiPanjang);
            }
        });
        Button BasicView1= findViewById(R.id.button11);
        BasicView1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent BasicView1 = new Intent(MainActivity.this, BasicView1.class);
                startActivity(BasicView1);
            }
        });
    }
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
       if (id == R.id.action_exit) {
            pesan_toast("Terima Kasih telah menggunakan Aplikasi Kami ...");
            finish();
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
    private void pesan_toast(String pesan) {
        Toast.makeText(getApplicationContext(), pesan, Toast.LENGTH_SHORT).show();
    }
}
