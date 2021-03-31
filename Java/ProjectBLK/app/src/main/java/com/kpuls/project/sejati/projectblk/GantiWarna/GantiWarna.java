package com.kpuls.project.sejati.projectblk.GantiWarna;

import android.graphics.Color;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;

import com.kpuls.project.sejati.projectblk.R;

public class GantiWarna extends AppCompatActivity {

    TextView GantiWarna;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_ganti_warna);
        GantiWarna= findViewById(R.id.txt_tulisan);
        setToolbar();
    }
    private void setToolbar() {
        Toolbar toolbar =  findViewById(R.id.toolbar);
        //setSupportActionBar(toolbar);
        final ActionBar ab = getSupportActionBar();
        ab.setDisplayHomeAsUpEnabled(true);
        ab.setTitle("Ganti Warna");
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

    public void gantiCokelat(View view) {
        GantiWarna.setTextColor(Color.WHITE);
    }

    public void gantiHitam(View view) {

        GantiWarna.setTextColor(Color.BLACK);
    }

    public void gantiBiru(View view) {
        GantiWarna.setTextColor(Color.BLUE);
    }

    public void gantiKuning(View view) {
        GantiWarna.setTextColor(Color.YELLOW);
    }

    public void gantiMerah(View view) {
        GantiWarna.setTextColor(Color.RED);
    }

    public void gantiHijau(View view) {
        GantiWarna.setTextColor(Color.GREEN);
    }
}
