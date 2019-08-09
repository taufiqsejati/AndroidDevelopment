package com.kpuls.project.sejati.projectblk.BelajarIntent;

import android.content.Intent;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;

import com.kpuls.project.sejati.projectblk.MainActivity;
import com.kpuls.project.sejati.projectblk.R;

public class BelajarIntent extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_belajar_intent);
        Button ke2=findViewById(R.id.btn_kedua_1);
        ke2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent ke2= new Intent(BelajarIntent.this, BelajarIntent2.class);
                startActivity(ke2);
            }
        });
        Button ke3=findViewById(R.id.btn_ketiga_1);
        ke3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent ke3= new Intent(BelajarIntent.this, BelajarIntent3.class);
                startActivity(ke3);
            }
        });
        Button kehome=findViewById(R.id.btn_home);
        kehome.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent kehome= new Intent(BelajarIntent.this, MainActivity.class);
                startActivity(kehome);
            }
        });
        setToolbar();
    }
    private void setToolbar() {
        Toolbar toolbar =  findViewById(R.id.toolbar);
        //setSupportActionBar(toolbar);
        final ActionBar ab = getSupportActionBar();
        ab.setDisplayHomeAsUpEnabled(true);
        ab.setTitle("Belajar Intent");
    }
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        switch (item.getItemId()){
            case android.R.id.home :
                finish();
                break;
        }

        return true;
    }

}
